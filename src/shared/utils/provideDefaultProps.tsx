import { WithOptionalKeys } from '@shared/types';
import { ComponentType, FC, forwardRef } from 'react';

export const provideDefaultProps = <
  T extends Record<string, any>,
  Keys extends keyof T,
  DefaultProps extends Pick<T, Keys>,
>(
  Component: ComponentType<T>,
  defaultProps: DefaultProps,
): FC<WithOptionalKeys<T, Keys>> => {
  type NewProps = WithOptionalKeys<T, Keys>;

  const RenderComponent =
    'initComponent' in Component ? (Component.initComponent as ComponentType<T>) : Component;
  const allDefaultProps =
    'initProps' in Component
      ? { ...(Component.initProps as DefaultProps), ...defaultProps }
      : defaultProps;

  const NewComponent = forwardRef((props, ref) => {
    const allProps: T = { ...defaultProps, ...props } as unknown as T;

    return <Component {...allProps} {...(ref ? { ref } : {})} />;
  }) as unknown as FC<NewProps>;

  return Object.assign(NewComponent, {
    initComponent: RenderComponent,
    initProps: allDefaultProps,
  });
};
