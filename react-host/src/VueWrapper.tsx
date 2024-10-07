/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useEffect } from "react";
import { createApp, defineComponent, h } from "vue";

interface VueWrapperProps {
  component: any;
  props?: Record<string, any>;
}

const VueWrapper: React.FC<VueWrapperProps> = ({
  component,
  props,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const AsyncComponent = defineComponent(component);
      const app = createApp({
        render() {
          return h(AsyncComponent, { ...props });
        },
      });
      app.mount(containerRef.current);
      return () => {
        app.unmount();
      };
    }
  }, [component, props]);

  return <div ref={containerRef}></div>;
};

export default VueWrapper;
