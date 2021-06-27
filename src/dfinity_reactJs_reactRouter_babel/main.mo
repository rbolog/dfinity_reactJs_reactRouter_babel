import Principal "mo:base/Principal";
import Nat32 "mo:base/Nat32";


shared({caller = canisterOwner}) actor class () {

    public shared query ({caller}) func greet(name : Text) : async Text {
        let hash = Principal.hash(caller);
        return "Hello, " # name # "! caller hash: " # Nat32.toText(hash);
    };
};
