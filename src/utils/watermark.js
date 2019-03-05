
export const watermarkConfig = {
  attributes: true,
  attributeOldValue: true,
};

export default function watermarkCallback(mutationList, observer) {
  mutationList.forEach((mutationRecord) => {
    const { type, attributeName } = mutationRecord;
    if (type === 'attributes' && attributeName === 'style') {
      observer.disconnect();
      const { target, oldValue } = mutationRecord;
      target.setAttribute('style', oldValue);
      observer.observe(target, watermarkConfig);
    }
  });
}
