export interface IDropdownSettings {
  singleSelection?: boolean;
  idField?: string;
  textField?: string;
  disabledField?: string;
  enableCheckAll?: boolean;
  selectAllText?: string;
  unSelectAllText?: string;
  allowSearchFilter?: boolean;
  clearSearchFilter?: boolean;
  maxHeight?: number;
  itemsShowLimit?: number;
  limitSelection?: number;
  searchPlaceholderText?: string;
  noDataAvailablePlaceholderText?: string;
  closeDropDownOnSelection?: boolean;
  showSelectedItemsAtTop?: boolean;
  defaultOpen?: boolean;
  allowRemoteDataSearch?: boolean;
  property?: string;
  placement?: string;
  displayOrder?: string;
  includeDisabledCount?: boolean;
}

export class ListItem {
  id: String | number;
  text: String | number;
  isDisabled?: boolean;
  property?: String;
  displayOrder?: number;

  public constructor(source: any) {
    if (typeof source === "string" || typeof source === "number") {
      this.id = this.text = source;
      this.isDisabled = false;
      this.property = "";
      this.displayOrder = 1;
    }
    if (typeof source === "object") {
      this.id = source.id;
      this.text = source.text;
      this.isDisabled = source.isDisabled;
      this.property = source.property;
      this.displayOrder = source.displayOrder;
    }
  }
}
