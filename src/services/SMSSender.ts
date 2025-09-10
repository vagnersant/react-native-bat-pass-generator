import * as SMS from 'expo-sms';

export const smsSender = async (phoneNumber: string, message: string): Promise<void> => {
    const isAvailable = await SMS.isAvailableAsync();
    if (isAvailable) {
        const { result } = await SMS.sendSMSAsync([phoneNumber], message);
        if (result === 'sent') {
            console.log(`SMS sent to ${phoneNumber}: ${message}`);
        } else {
            console.log(`Failed to send SMS to ${phoneNumber}`);
        }
    } else {
        console.log('SMS is not available on this device');
    }
};