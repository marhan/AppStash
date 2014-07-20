package io.github.appstash.shop.service.checkout.api;

import io.github.appstash.shop.service.order.model.OrderItemInfo;

import java.math.BigDecimal;
import java.util.List;

/**
 * @author zutherb
 */
public interface Checkout {
    List<OrderItemInfo> getOrderItemInfos();
    BigDecimal getTotalSum();
}
