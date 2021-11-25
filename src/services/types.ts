export interface FetchRequestTokenType {
  RequestToken: string | null;
  AccessToken: string | null;
  Expires: number;
  RefreshToken: string | null;
  Scope?: null;
  Error?: null;
  Success: boolean;
  RequireSsl: boolean;
}

export interface DeliveryAddressType {
  ZipCode: string;
  AddressLine1: string;
  AddressLine2: string;
  Description: string;
  City: string;
  Country: string;
  State: string;
  FullName: string;
  Phone: string;
}

export interface Shipping {
  Id: number;
  Title: string;
  Phone: string;
  Email?: string;
  Type: string;
}

export interface OrderListItem {
  Id: string;
  PhotolabId: number;
  CustomId: string;
  SourceOrderId?: number;
  ManagerId?: string;
  AssignedToId?: boolean;
  Title: string;
  TrackingUrl: string;
  TrackingNumber?: number;
  Status: string;
  RenderStatus: string;
  PaymentStatus: string;
  DeliveryAddress: DeliveryAddressType;
  Shipping: Shipping;
  CommentsCount: number;
  DownloadLink: string;
  PreviewImageUrl: string;
  Price: number;
  DiscountPrice: number;
  DeliveryPrice: number;
  TotalPrice: number;
  PaidPrice: number;
  UserId: number;
  UserCompanyAccountId?: number;
  DiscountTitle: string;
  DateCreated: string;
  DateModified: string;
  DatePaid?: string;
  DateReady?: string;
  LastDownloadedPaymentDocument: string;
  PaymentSystemUniqueId: string;
  GoogleClientId: string;
  ContractorOrders?: any;
}

interface FetchOrderList {
  ApiVersion: string;
  ResponseCode: number;
}

export interface FetchOrderListType extends FetchOrderList {
  Result: OrderListItem[];
}

export interface FetchOrderListCountType extends FetchOrderList {
  Result: { count: number };
}
