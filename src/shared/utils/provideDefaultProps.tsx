import { WithOptionalKeys } from '@shared/types';
import { ComponentProps, ComponentType, FC, JSX, forwardRef } from 'react';

export const provideDefaultProps = <
  const TComponent extends ComponentType<any> | keyof JSX.IntrinsicElements,
  Props extends ComponentProps<TComponent>,
  Keys extends keyof Props,
  DefaultProps extends Pick<Props, Keys>,
>(
  Component: TComponent,
  defaultProps: DefaultProps,
): FC<WithOptionalKeys<Props, Keys>> => {
  type NewProps = WithOptionalKeys<Props, Keys>;

  const RenderComponent =
    // @ts-ignore
    typeof Component !== 'string' && 'initComponent' in Component
      ? (Component.initComponent as ComponentType<Props>)
      : Component;
  const allDefaultProps =
    // @ts-ignore
    typeof Component !== 'string' && 'initProps' in Component
      ? { ...(Component.initProps as DefaultProps), ...defaultProps }
      : defaultProps;

  const NewComponent = forwardRef((props, ref) => {
    const allProps: Props = { ...defaultProps, ...props } as unknown as Props;

    // @ts-ignore
    return <Component {...allProps} {...(ref ? { ref } : {})} />;
  }) as unknown as FC<NewProps>;

  return Object.assign(NewComponent, {
    initComponent: RenderComponent,
    initProps: allDefaultProps,
  });
};
