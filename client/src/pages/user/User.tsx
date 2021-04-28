import React from "react";

export const User = () => (
  <div>
    <div className="dataUser">
      <div className="singleLineBlocks">
        <img
          className="userImage"
          src="https://pereezd-neva.ru/assets/template/img/spectehnika/d5fa0e2330973dc6b7571d881a345d6b.png"
          alt="аватар юзера"
        />
      </div>
      <div className="singleLineBlocks">
        <div className="userDescription">
          <h5>Логин: ivanov.Ivan</h5>
          <h5>Имя: Иван</h5>
          <h5>Фамилия: Иванов</h5>
          <h5>Отчетство: Иванович</h5>
          <h5>Баланс: $ 100</h5>
        </div>
      </div>
    </div>
    <div className="purchaseHistory">
      <h2>История покупок</h2>
      <h3>У вас было 2 покупки</h3>
    </div>
    <div className="dataPurchase">
      <table className="tablePurchaseHistory">
        <tbody>
          <tr className="nameColumn">
            <td>Название товара</td>
            <td>Сумма сделки</td>
          </tr>
          <tr>
            <td>Смартфон Lenovo</td>
            <td>$ 200</td>
          </tr>
          <tr>
            <td>Ноутбук Acer</td>
            <td>$ 900</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
