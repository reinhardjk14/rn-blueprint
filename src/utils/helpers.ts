import {Share} from 'react-native';

export function formatNumber(number: number): string {
  const units: string[] = ['', 'K', 'M', 'B', 'T'];

  const unitIndex = Math.floor(Math.log10(number) / 3);

  if (unitIndex >= units.length) {
    return number.toString();
  }

  const scaledNumber = number / Math.pow(1000, unitIndex);
  const suffix = units[unitIndex];
  const formattedNumber = `${scaledNumber.toFixed(1)}${suffix}`;

  return formattedNumber;
}

export const URLSearchParams = (params: any = {}) => {
  let qparam = '?';
  let keys = Object.keys(params);
  for (let id = 0; id < keys.length; id++) {
    const element = keys[id];
    qparam += `${element}=${params[element]}&`;
  }

  return qparam;
};

export const onShare = async (content: any) => {
  try {
    const result = await Share.share({
      message: content,
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    // alert(error.message);
    console.log('error', error);
  }
};
