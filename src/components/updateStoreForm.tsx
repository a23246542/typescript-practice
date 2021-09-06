//  Object.keys(copyData.paymentSetting).forEach((allowType) => {
//    const allowPaymentType = copyData.paymentSetting[allowType as AllowType];
//    switch (allowType) {
//      case AllowType.CASH:
//        if (allowPaymentType) {
//          paymentTypes.push(PaymentType.CASH);
//        }
//        break;
//      case AllowType.CREDIT:
//        if (allowPaymentType) {
//          paymentTypes.push(PaymentType.CREDIT);
//        }
//        break;
//      case AllowType.LINE:
//        if (allowPaymentType) {
//          paymentTypes.push(PaymentType.LINEPAY);
//        }
//        break;
//      default:
//        break;
//    }
//  });

// const paymentTypes: PaymentType[] = [];

// const PaymentTypeArr = ['CASH', 'CREDIT', 'LINEPAY'];
// const PaymentTypeArr: [PaymentType, PaymentType, PaymentType] = ['CASH', 'CREDIT', 'LINEPAY'];
// const PaymentTypeArr: [PaymentType, PaymentType, PaymentType] = Object.values(PaymentType);
// const PaymentTypeArr: PaymentType[] = Object.values(PaymentType).filter(type=>type!=="");
// const PaymentTypeArr: PaymentType[] = Object.values(PaymentType);

const paymentTypeArr = Object.entries(copyData.paymentSetting).reduce(
  (acc, [key, booleanValue], currentIndex) => {
    if (booleanValue) {
      switch (key) {
        case AllowType.CASH:
          return acc.push(PaymentType.CASH);
        case AllowType.CREDIT:
          return acc.push(PaymentType.CREDIT);
        case AllowType.LINE:
          return acc.push(PaymentType.LINEPAY);
        default:
          break;
      }
    }
  },
  [] as PaymentType[],
);

if (!copyData.hasOwnProperty('paymentSetting')) {
  copyData.paymentSetting = {
    allowCashPay: false,
    allowCreditPay: false,
    allowLinePay: false,
  };
}

const paymentTypes = Object.entries(copyData.paymentSetting).reduce(
  (acc, [key, booleanValue]: [string, boolean]): PaymentType[] | [] => {
    if (!booleanValue) {
      return acc;
    }

    switch (key) {
      case AllowType.CASH:
        acc.push(PaymentType.CASH);
        break;
      case AllowType.CREDIT:
        acc.push(PaymentType.CREDIT);
        break;
      case AllowType.LINE:
        acc.push(PaymentType.LINEPAY);
        break;
      default:
        break;
    }
    return acc;
  },
  [] as PaymentType[],
);

copyData.paymentTypes = paymentTypes;
const { paymentSetting, ...updateStoreReqData } = copyData;
