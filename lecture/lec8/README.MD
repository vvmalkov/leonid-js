## 8 Урок


state («состояние») — вначале "pending" («ожидание»), 
потом меняется на "fulfilled" («выполнено успешно») при вызове resolve 
или на "rejected" («выполнено с ошибкой») при вызове reject.


pending — стартовое состояние, операция стартовала;
fulfilled — получен результат;
rejected — ошибка.

Поменять состояние можно только один раз: перейти из pending либо в fulfilled, либо в rejected: