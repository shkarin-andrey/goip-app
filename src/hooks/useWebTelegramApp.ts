declare const window: Window &
  typeof globalThis & {
    Telegram: typeof Telegram;
  };

const app = window.Telegram.WebApp;

export function useWebTelegramApp() {
  const onClose = () => {
    app.close();
  };

  const onTogleMainButtom = (on = false) => {
    if (on) return app.MainButton.show();
    return app.MainButton.hide();
  };

  const onReady = () => {
    app.ready();
  };

  const onDataUnsafe = () => {
    return app.initDataUnsafe;
  };

  const onData = () => {
    return app.initData;
  };

  return { onData, onClose, onDataUnsafe, onReady };
}
