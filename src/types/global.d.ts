/*
 * *** GLOBALLY AVAILABLE TYPES ***
 * DO NOT ADD IMPORT OR EXPORT STATEMENTS HERE
 * Doing so will make this a module and it won't be globally available
 */

interface IAuthUser {
    user: string | null;
    login: (user: string) => Promise<void>;
    logout: () => void;
}
