import { onMounted, onUnmounted } from "vue";

export const useValueDrag = (callback: (delta: number) => void) => {
  let mouseIsPressed = false;
  let mouseYPosOnPress = 0;

  const setMousePressed = (event: MouseEvent) => {
    mouseIsPressed = true;
    mouseYPosOnPress = event.screenY;
  };

  const setMouseReleased = () => (mouseIsPressed = false);

  const onMouseMove = (ev: MouseEvent) => {
    if (!mouseIsPressed) {
      return;
    }

    const delta = ev.screenY - mouseYPosOnPress;
    if (delta > 70) {
      callback(-1);
      mouseYPosOnPress = ev.screenY;
    } else if (delta < -70) {
      callback(1);
      mouseYPosOnPress = ev.screenY;
    }
  };

  onMounted(() => {
    document.addEventListener("mousedown", setMousePressed);
    document.addEventListener("mouseup", setMouseReleased);
    document.addEventListener("mousemove", onMouseMove);
  });

  onUnmounted(() => {
    document.removeEventListener("mousedown", setMousePressed);
    document.removeEventListener("mouseup", setMouseReleased);
    document.removeEventListener("mousemove", onMouseMove);
  });
};
