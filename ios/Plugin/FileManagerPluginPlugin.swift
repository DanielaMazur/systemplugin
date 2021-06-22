import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(FileManagerPluginPlugin)
public class FileManagerPluginPlugin: CAPPlugin {
    private let implementation = FileManagerPlugin()

    @objc func containerURLPath(_ call: CAPPluginCall) {
        let forSecurityApplicationGroupIdentifier = call.getString("forSecurityApplicationGroupIdentifier") ?? ""
        call.resolve([
            "forSecurityApplicationGroupIdentifier": implementation.containerURLPath(forSecurityApplicationGroupIdentifier: forSecurityApplicationGroupIdentifier)
        ])
    }
}
