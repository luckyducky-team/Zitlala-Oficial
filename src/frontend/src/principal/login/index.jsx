import { AuthClient } from '@dfinity/auth-client';
import { toJwt } from 'azle/http_client';
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';



@customElement('azle-app')
export class AzleApp extends LitElement {
    // Remove the type annotation since it is not valid in a JavaScript file
    identity = null;

    @property()
    whoami = '';

    connectedCallback() {
        super.connectedCallback();
        this.authenticate();
    }

    async authenticate() {
        const authClient = await AuthClient.create();
        const isAuthenticated = await authClient.isAuthenticated();

        if (isAuthenticated === true) {
            this.handleIsAuthenticated(authClient);
        } else {
            await this.handleIsNotAuthenticated(authClient);
        }
    }

    handleIsAuthenticated(authClient) {
        this.identity = authClient.getIdentity();
    }

    async handleIsNotAuthenticated(authClient) {
        await new Promise((resolve, reject) => {
            authClient.login({
                identityProvider: import.meta.env.VITE_IDENTITY_PROVIDER,
                onSuccess: resolve,
                onError: reject,
                windowOpenerFeatures: `width=500,height=500`
            });
        });

        this.identity = authClient.getIdentity();
    }

    async whoamiUnauthenticated() {
        const response = await fetch(
            `${import.meta.env.VITE_CANISTER_ORIGIN}/whoami`
        );
        const responseText = await response.text();

        this.whoami = responseText;
    }

    async whoamiAuthenticated() {
        const response = await fetch(
            `${import.meta.env.VITE_CANISTER_ORIGIN}/whoami`,
            {
                method: 'GET',
                headers: [['Authorization', toJwt(this.identity)]]
            }
        );
        const responseText = await response.text();

        this.whoami = responseText;
    }

    render() {
        return html`
            <h1>Internet Identity</h1>

            <h2>
                Whoami principal:
                <span id="whoamiPrincipal">${this.whoami}</span>
            </h2>

            <button
                id="whoamiUnauthenticated"
                @click=${this.whoamiUnauthenticated}
            >
                Whoami Unauthenticated
            </button>
            <button
                id="whoamiAuthenticated"
                @click=${this.whoamiAuthenticated}
                .disabled=${this.identity === null}
            >
                Whoami Authenticated
            </button>
        `;
    }
}