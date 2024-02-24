import { onMounted, onUnmounted } from "vue";

export const useValueDrag = (callback: (delta: number) => void) => {
  let mouseYPosOnPress = 0;

  const onMouseMove = (ev: MouseEvent) => {
    const delta = ev.screenY - mouseYPosOnPress;
    if (delta > 70) {
      callback(-1);
      mouseYPosOnPress = ev.screenY;
    } else if (delta < -70) {
      callback(1);
      mouseYPosOnPress = ev.screenY;
    }
  };

  const setMousePressed = (event: MouseEvent) => {
    mouseYPosOnPress = event.screenY;
    document.addEventListener("mousemove", onMouseMove);
  };

  const setMouseReleased = () => {
    document.removeEventListener("mousemove", onMouseMove);
  };

  onMounted(() => {
    document.addEventListener("mousedown", setMousePressed);
    document.addEventListener("mouseup", setMouseReleased);
  });

  onUnmounted(() => {
    document.removeEventListener("mousedown", setMousePressed);
    document.removeEventListener("mouseup", setMouseReleased);
  });
};
