import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { IconButton, Text } from '@radix-ui/themes';
import { FC, ReactNode, useEffect, useState } from 'react';

import * as styles from './styles.css';

export type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  title: ReactNode;
  contentNode?: ReactNode;
};

export const Drawer: FC<DrawerProps> = ({ isOpen, onClose, title, contentNode }) => {
  const [innerIsOpen, setInnerIsOpen] = useState(isOpen);

  const renderDrawer = isOpen || innerIsOpen;

  useEffect(() => {
    if (!renderDrawer) return;

    const { activeElement } = document; // Get the currently focused element

    return () => {
      (activeElement as HTMLElement).focus();
    };
  }, [renderDrawer]);

  return (
    <Dialog.Root open={renderDrawer} onOpenChange={onClose}>
      <Dialog.Content
        className={styles.drawerContainer({ visible: isOpen })}
        aria-describedby={undefined}
        onTransitionEnd={() => setInnerIsOpen(isOpen)}
      >
        <Dialog.Title className={styles.title}>
          <Text size={{ initial: '4', sm: '6' }}>{title}</Text>
        </Dialog.Title>

        <div className={styles.contentContainer}>{contentNode}</div>

        <Dialog.Close className={styles.closeButton} asChild>
          <IconButton variant="ghost" size={'4'} color="gray">
            <Cross2Icon width={'20px'} height={'20px'} />
          </IconButton>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Root>
  );
};
