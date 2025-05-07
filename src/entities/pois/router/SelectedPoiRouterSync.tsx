import { useLocaleType } from '@shared/locale';
import { ChildrenProp, PoiId } from '@shared/types';
import { FC, useEffect } from 'react';
import { generatePath, useNavigate, useParams } from 'react-router';
import { getPoisList } from '../getPoisList';
import { useSelectedPoiStore } from '../store';

export const SelectedPoiRouterSync: FC<ChildrenProp> = ({ children }) => {
  const navigate = useNavigate();
  const { id } = useParams<{ id?: PoiId }>();

  const { selectedPoi, setSelectedPoi } = useSelectedPoiStore();
  const { locale } = useLocaleType();

  const selectedPoiId = selectedPoi?.id ?? null;

  useEffect(() => {
    if (id === selectedPoiId) return;

    navigate(generatePath('/:id?', { id: selectedPoi?.id ?? null }));
  }, [selectedPoi]);

  useEffect(() => {
    if (id === selectedPoiId) return;

    const selectedPoiData = getPoisList(locale).find((poi) => poi.id === id);

    setSelectedPoi(selectedPoiData ?? null);
  }, [id]);

  return <>{children}</>;
};
