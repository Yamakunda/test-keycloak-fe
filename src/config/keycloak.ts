// Cấu hình Keycloak — confidential client (Client authentication = On).
// LƯU Ý: secret nằm trong bundle JS nên chỉ dùng kiểu này cho demo;
// production thì token exchange + secret phải nằm ở backend.

export const KEYCLOAK_URL: string = process.env.REACT_APP_KEYCLOAK_URL || "http://localhost:8080";
export const REALM = "test";
export const CLIENT_ID = "test-client";
// Lấy ở Admin Console → Clients → test-client → tab Credentials → Client Secret
export const CLIENT_SECRET: string = process.env.REACT_APP_CLIENT_SECRET || "shngTw44FR1EZPznv9JWizP1Y4QgdiNU";
export const REDIRECT_URI = window.location.origin + "/callback";
export const POST_LOGOUT_REDIRECT_URI = window.location.origin + "/login";

export const KC_BASE = `${KEYCLOAK_URL}/realms/${REALM}/protocol/openid-connect`;
