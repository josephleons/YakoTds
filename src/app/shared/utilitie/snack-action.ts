export namespace SnackBarAction {
    export class Show {
        static readonly type = '[SnackBar] Show';
        constructor(
            public message: string,
            public duration: number = 3000,
            public type: 'success' | 'error' | 'info' | 'warning' = 'error' 
        ) {
        }
    }
    export class Hide {
        static readonly type = '[Snackbar] Hide';
     
    }
}
