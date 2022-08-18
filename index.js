import { BrowserCodeReader, BrowserQRCodeReader } from "@zxing/browser";

(async () => {
  const codeReader = new BrowserQRCodeReader();

  const videoInputDevices = await BrowserCodeReader.listVideoInputDevices();

  // choose your media device (webcam, frontal camera, back camera, etc.)
  const selectedDeviceId = videoInputDevices[0].deviceId;

  console.log(`Started decode from camera with id ${selectedDeviceId}`);

  const previewElem = document.querySelector(
    "#test-area-qr-code-webcam > video"
  );

  // you can use the controls to stop() the scan or switchTorch() if available
  const result = await codeReader.decodeOnceFromVideoDevice(
    selectedDeviceId,
    previewElem
  );
})();
