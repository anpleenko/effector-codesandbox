export const ClearButton = ({ resetField }: { resetField: () => void }) => (
  <input type="button" value="clear input" className="clear" onClick={resetField} />
);
