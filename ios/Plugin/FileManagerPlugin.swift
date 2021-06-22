import Foundation

@objc public class FileManagerPlugin: NSObject {
    @objc public func containerURLPath(forSecurityApplicationGroupIdentifier: String) -> String {
        let fileManager = FileManager()
        let containerUrl = fileManager.containerURL(forSecurityApplicationGroupIdentifier: forSecurityApplicationGroupIdentifier)
        return containerUrl?.path ?? ""
    }
}
