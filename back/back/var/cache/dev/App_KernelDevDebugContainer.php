<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerUaGEKeD\App_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerUaGEKeD/App_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerUaGEKeD.legacy');

    return;
}

if (!\class_exists(App_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerUaGEKeD\App_KernelDevDebugContainer::class, App_KernelDevDebugContainer::class, false);
}

return new \ContainerUaGEKeD\App_KernelDevDebugContainer([
    'container.build_hash' => 'UaGEKeD',
    'container.build_id' => '2e75acc5',
    'container.build_time' => 1651570043,
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerUaGEKeD');
