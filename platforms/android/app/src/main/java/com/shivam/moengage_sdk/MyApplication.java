package com.shivam.moengage_sdk;

import android.app.Application;

import com.moengage.cordova.MoEInitializer;
import com.moengage.core.LogLevel;
import com.moengage.core.MoEngage;
import com.moengage.core.config.GeofenceConfig;
import com.moengage.core.config.LogConfig;
import com.moengage.core.config.NotificationConfig;

public class MyApplication extends Application {

    @Override
    public void onCreate() {
        super.onCreate();

        MoEngage.Builder builder = new MoEngage.Builder(this,"IH6AQW6DRKK7J5HMTNH7BEKT")
                .configureLogs(new LogConfig(LogLevel.VERBOSE,true))
                .configureNotificationMetaData(
                        new NotificationConfig(
                                R.mipmap.ic_launcher,
                                R.mipmap.ic_launcher,
                                R.color.notificaitonColor,
                                null,
                                true,
                                true,
                                true)
                ).configureGeofence(new GeofenceConfig(
                        true,
                        true
                ));

        MoEInitializer.initialize(this,builder);

    }
}
