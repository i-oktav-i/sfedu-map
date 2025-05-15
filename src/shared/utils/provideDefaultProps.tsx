import { WithOptionalKeys } from '@shared/types';
import { ComponentProps, ComponentType, FC, JSX, forwardRef } from 'react';

type AnyComponent = ComponentType<any> | keyof JSX.IntrinsicElements;

type AnyWrappedComponent =
  | AnyComponent
  | (AnyComponent & {
      initComponent: AnyComponent;
      initProps: any;
    });

const notString = <T,>(value: T): value is Exclude<T, string> => typeof value !== 'string';

export const provideDefaultProps = <
  const TComponent extends AnyWrappedComponent,
  Props extends ComponentProps<TComponent>,
  Keys extends keyof Props,
  DefaultProps extends Pick<Props, Keys>,
>(
  Component: TComponent,
  defaultProps: DefaultProps,
): FC<WithOptionalKeys<Props, Keys>> => {
  type NewProps = WithOptionalKeys<Props, Keys>;

  const RenderComponent =
    notString(Component) && 'initComponent' in Component
      ? (Component.initComponent as ComponentType<Props>)
      : (Component as AnyComponent);

  const allDefaultProps =
    notString(Component) && 'initProps' in Component
      ? { ...(Component.initProps as DefaultProps), ...defaultProps }
      : defaultProps;

  const NewComponent = forwardRef((props, ref) => {
    const allProps: Props = { ...defaultProps, ...props } as unknown as Props;

    return <RenderComponent {...allProps} {...(ref ? { ref } : {})} />;
  }) as unknown as FC<NewProps>;

  return Object.assign(NewComponent, {
    initComponent: RenderComponent,
    initProps: allDefaultProps,
  });
};
