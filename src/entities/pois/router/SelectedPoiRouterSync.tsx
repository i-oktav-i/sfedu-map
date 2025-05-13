import { useLocaleType } from '@shared/locale';
import { ChildrenProp, PoiId } from '@shared/types';
import { FC, useEffect, useState } from 'react';
import { generatePath, useNavigate, useParams } from 'react-router';
import { getPoisList } from '../getPoisList';
import { useSelectedPoiStore } from '../store';

export const SelectedPoiRouterSync: FC<ChildrenProp> = ({ children }) => {
  const navigate = useNavigate();
  const { id } = useParams<{ id?: `${PoiId}` }>();

  const { selectedPoi, setSelectedPoi } = useSelectedPoiStore();
  const { locale } = useLocaleType();

  const [inited, setInited] = useState(false);

  const selectedPoiId = selectedPoi?.id ?? null;

  useEffect(() => {
    if (!inited || id === selectedPoiId) return;

    navigate(generatePath('/:id?', { id: selectedPoiId }));
  }, [selectedPoiId]);

  useEffect(() => {
    if (selectedPoiId && id === selectedPoiId) return;

    const selectedPoiData = getPoisList(locale).find((poi) => poi.id === id);

    setSelectedPoi(selectedPoiData ?? null);
  }, [id]);

  useEffect(() => setInited(true), []);

  return (
    <>
      {selectedPoi?.address ? <title>{selectedPoi.address}</title> : null}

      {children}
    </>
  );
};
