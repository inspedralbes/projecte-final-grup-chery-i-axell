<?php

namespace ContainerUaGEKeD;
include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'doctrine'.\DIRECTORY_SEPARATOR.'persistence'.\DIRECTORY_SEPARATOR.'src'.\DIRECTORY_SEPARATOR.'Persistence'.\DIRECTORY_SEPARATOR.'ObjectManager.php';
include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'doctrine'.\DIRECTORY_SEPARATOR.'orm'.\DIRECTORY_SEPARATOR.'lib'.\DIRECTORY_SEPARATOR.'Doctrine'.\DIRECTORY_SEPARATOR.'ORM'.\DIRECTORY_SEPARATOR.'EntityManagerInterface.php';
include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'doctrine'.\DIRECTORY_SEPARATOR.'orm'.\DIRECTORY_SEPARATOR.'lib'.\DIRECTORY_SEPARATOR.'Doctrine'.\DIRECTORY_SEPARATOR.'ORM'.\DIRECTORY_SEPARATOR.'EntityManager.php';

class EntityManager_9a5be93 extends \Doctrine\ORM\EntityManager implements \ProxyManager\Proxy\VirtualProxyInterface
{
    /**
     * @var \Doctrine\ORM\EntityManager|null wrapped object, if the proxy is initialized
     */
    private $valueHolder42970 = null;

    /**
     * @var \Closure|null initializer responsible for generating the wrapped object
     */
    private $initializerc8a19 = null;

    /**
     * @var bool[] map of public properties of the parent class
     */
    private static $publicProperties464ee = [
        
    ];

    public function getConnection()
    {
        $this->initializerc8a19 && ($this->initializerc8a19->__invoke($valueHolder42970, $this, 'getConnection', array(), $this->initializerc8a19) || 1) && $this->valueHolder42970 = $valueHolder42970;

        return $this->valueHolder42970->getConnection();
    }

    public function getMetadataFactory()
    {
        $this->initializerc8a19 && ($this->initializerc8a19->__invoke($valueHolder42970, $this, 'getMetadataFactory', array(), $this->initializerc8a19) || 1) && $this->valueHolder42970 = $valueHolder42970;

        return $this->valueHolder42970->getMetadataFactory();
    }

    public function getExpressionBuilder()
    {
        $this->initializerc8a19 && ($this->initializerc8a19->__invoke($valueHolder42970, $this, 'getExpressionBuilder', array(), $this->initializerc8a19) || 1) && $this->valueHolder42970 = $valueHolder42970;

        return $this->valueHolder42970->getExpressionBuilder();
    }

    public function beginTransaction()
    {
        $this->initializerc8a19 && ($this->initializerc8a19->__invoke($valueHolder42970, $this, 'beginTransaction', array(), $this->initializerc8a19) || 1) && $this->valueHolder42970 = $valueHolder42970;

        return $this->valueHolder42970->beginTransaction();
    }

    public function getCache()
    {
        $this->initializerc8a19 && ($this->initializerc8a19->__invoke($valueHolder42970, $this, 'getCache', array(), $this->initializerc8a19) || 1) && $this->valueHolder42970 = $valueHolder42970;

        return $this->valueHolder42970->getCache();
    }

    public function transactional($func)
    {
        $this->initializerc8a19 && ($this->initializerc8a19->__invoke($valueHolder42970, $this, 'transactional', array('func' => $func), $this->initializerc8a19) || 1) && $this->valueHolder42970 = $valueHolder42970;

        return $this->valueHolder42970->transactional($func);
    }

    public function wrapInTransaction(callable $func)
    {
        $this->initializerc8a19 && ($this->initializerc8a19->__invoke($valueHolder42970, $this, 'wrapInTransaction', array('func' => $func), $this->initializerc8a19) || 1) && $this->valueHolder42970 = $valueHolder42970;

        return $this->valueHolder42970->wrapInTransaction($func);
    }

    public function commit()
    {
        $this->initializerc8a19 && ($this->initializerc8a19->__invoke($valueHolder42970, $this, 'commit', array(), $this->initializerc8a19) || 1) && $this->valueHolder42970 = $valueHolder42970;

        return $this->valueHolder42970->commit();
    }

    public function rollback()
    {
        $this->initializerc8a19 && ($this->initializerc8a19->__invoke($valueHolder42970, $this, 'rollback', array(), $this->initializerc8a19) || 1) && $this->valueHolder42970 = $valueHolder42970;

        return $this->valueHolder42970->rollback();
    }

    public function getClassMetadata($className)
    {
        $this->initializerc8a19 && ($this->initializerc8a19->__invoke($valueHolder42970, $this, 'getClassMetadata', array('className' => $className), $this->initializerc8a19) || 1) && $this->valueHolder42970 = $valueHolder42970;

        return $this->valueHolder42970->getClassMetadata($className);
    }

    public function createQuery($dql = '')
    {
        $this->initializerc8a19 && ($this->initializerc8a19->__invoke($valueHolder42970, $this, 'createQuery', array('dql' => $dql), $this->initializerc8a19) || 1) && $this->valueHolder42970 = $valueHolder42970;

        return $this->valueHolder42970->createQuery($dql);
    }

    public function createNamedQuery($name)
    {
        $this->initializerc8a19 && ($this->initializerc8a19->__invoke($valueHolder42970, $this, 'createNamedQuery', array('name' => $name), $this->initializerc8a19) || 1) && $this->valueHolder42970 = $valueHolder42970;

        return $this->valueHolder42970->createNamedQuery($name);
    }

    public function createNativeQuery($sql, \Doctrine\ORM\Query\ResultSetMapping $rsm)
    {
        $this->initializerc8a19 && ($this->initializerc8a19->__invoke($valueHolder42970, $this, 'createNativeQuery', array('sql' => $sql, 'rsm' => $rsm), $this->initializerc8a19) || 1) && $this->valueHolder42970 = $valueHolder42970;

        return $this->valueHolder42970->createNativeQuery($sql, $rsm);
    }

    public function createNamedNativeQuery($name)
    {
        $this->initializerc8a19 && ($this->initializerc8a19->__invoke($valueHolder42970, $this, 'createNamedNativeQuery', array('name' => $name), $this->initializerc8a19) || 1) && $this->valueHolder42970 = $valueHolder42970;

        return $this->valueHolder42970->createNamedNativeQuery($name);
    }

    public function createQueryBuilder()
    {
        $this->initializerc8a19 && ($this->initializerc8a19->__invoke($valueHolder42970, $this, 'createQueryBuilder', array(), $this->initializerc8a19) || 1) && $this->valueHolder42970 = $valueHolder42970;

        return $this->valueHolder42970->createQueryBuilder();
    }

    public function flush($entity = null)
    {
        $this->initializerc8a19 && ($this->initializerc8a19->__invoke($valueHolder42970, $this, 'flush', array('entity' => $entity), $this->initializerc8a19) || 1) && $this->valueHolder42970 = $valueHolder42970;

        return $this->valueHolder42970->flush($entity);
    }

    public function find($className, $id, $lockMode = null, $lockVersion = null)
    {
        $this->initializerc8a19 && ($this->initializerc8a19->__invoke($valueHolder42970, $this, 'find', array('className' => $className, 'id' => $id, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializerc8a19) || 1) && $this->valueHolder42970 = $valueHolder42970;

        return $this->valueHolder42970->find($className, $id, $lockMode, $lockVersion);
    }

    public function getReference($entityName, $id)
    {
        $this->initializerc8a19 && ($this->initializerc8a19->__invoke($valueHolder42970, $this, 'getReference', array('entityName' => $entityName, 'id' => $id), $this->initializerc8a19) || 1) && $this->valueHolder42970 = $valueHolder42970;

        return $this->valueHolder42970->getReference($entityName, $id);
    }

    public function getPartialReference($entityName, $identifier)
    {
        $this->initializerc8a19 && ($this->initializerc8a19->__invoke($valueHolder42970, $this, 'getPartialReference', array('entityName' => $entityName, 'identifier' => $identifier), $this->initializerc8a19) || 1) && $this->valueHolder42970 = $valueHolder42970;

        return $this->valueHolder42970->getPartialReference($entityName, $identifier);
    }

    public function clear($entityName = null)
    {
        $this->initializerc8a19 && ($this->initializerc8a19->__invoke($valueHolder42970, $this, 'clear', array('entityName' => $entityName), $this->initializerc8a19) || 1) && $this->valueHolder42970 = $valueHolder42970;

        return $this->valueHolder42970->clear($entityName);
    }

    public function close()
    {
        $this->initializerc8a19 && ($this->initializerc8a19->__invoke($valueHolder42970, $this, 'close', array(), $this->initializerc8a19) || 1) && $this->valueHolder42970 = $valueHolder42970;

        return $this->valueHolder42970->close();
    }

    public function persist($entity)
    {
        $this->initializerc8a19 && ($this->initializerc8a19->__invoke($valueHolder42970, $this, 'persist', array('entity' => $entity), $this->initializerc8a19) || 1) && $this->valueHolder42970 = $valueHolder42970;

        return $this->valueHolder42970->persist($entity);
    }

    public function remove($entity)
    {
        $this->initializerc8a19 && ($this->initializerc8a19->__invoke($valueHolder42970, $this, 'remove', array('entity' => $entity), $this->initializerc8a19) || 1) && $this->valueHolder42970 = $valueHolder42970;

        return $this->valueHolder42970->remove($entity);
    }

    public function refresh($entity)
    {
        $this->initializerc8a19 && ($this->initializerc8a19->__invoke($valueHolder42970, $this, 'refresh', array('entity' => $entity), $this->initializerc8a19) || 1) && $this->valueHolder42970 = $valueHolder42970;

        return $this->valueHolder42970->refresh($entity);
    }

    public function detach($entity)
    {
        $this->initializerc8a19 && ($this->initializerc8a19->__invoke($valueHolder42970, $this, 'detach', array('entity' => $entity), $this->initializerc8a19) || 1) && $this->valueHolder42970 = $valueHolder42970;

        return $this->valueHolder42970->detach($entity);
    }

    public function merge($entity)
    {
        $this->initializerc8a19 && ($this->initializerc8a19->__invoke($valueHolder42970, $this, 'merge', array('entity' => $entity), $this->initializerc8a19) || 1) && $this->valueHolder42970 = $valueHolder42970;

        return $this->valueHolder42970->merge($entity);
    }

    public function copy($entity, $deep = false)
    {
        $this->initializerc8a19 && ($this->initializerc8a19->__invoke($valueHolder42970, $this, 'copy', array('entity' => $entity, 'deep' => $deep), $this->initializerc8a19) || 1) && $this->valueHolder42970 = $valueHolder42970;

        return $this->valueHolder42970->copy($entity, $deep);
    }

    public function lock($entity, $lockMode, $lockVersion = null)
    {
        $this->initializerc8a19 && ($this->initializerc8a19->__invoke($valueHolder42970, $this, 'lock', array('entity' => $entity, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializerc8a19) || 1) && $this->valueHolder42970 = $valueHolder42970;

        return $this->valueHolder42970->lock($entity, $lockMode, $lockVersion);
    }

    public function getRepository($entityName)
    {
        $this->initializerc8a19 && ($this->initializerc8a19->__invoke($valueHolder42970, $this, 'getRepository', array('entityName' => $entityName), $this->initializerc8a19) || 1) && $this->valueHolder42970 = $valueHolder42970;

        return $this->valueHolder42970->getRepository($entityName);
    }

    public function contains($entity)
    {
        $this->initializerc8a19 && ($this->initializerc8a19->__invoke($valueHolder42970, $this, 'contains', array('entity' => $entity), $this->initializerc8a19) || 1) && $this->valueHolder42970 = $valueHolder42970;

        return $this->valueHolder42970->contains($entity);
    }

    public function getEventManager()
    {
        $this->initializerc8a19 && ($this->initializerc8a19->__invoke($valueHolder42970, $this, 'getEventManager', array(), $this->initializerc8a19) || 1) && $this->valueHolder42970 = $valueHolder42970;

        return $this->valueHolder42970->getEventManager();
    }

    public function getConfiguration()
    {
        $this->initializerc8a19 && ($this->initializerc8a19->__invoke($valueHolder42970, $this, 'getConfiguration', array(), $this->initializerc8a19) || 1) && $this->valueHolder42970 = $valueHolder42970;

        return $this->valueHolder42970->getConfiguration();
    }

    public function isOpen()
    {
        $this->initializerc8a19 && ($this->initializerc8a19->__invoke($valueHolder42970, $this, 'isOpen', array(), $this->initializerc8a19) || 1) && $this->valueHolder42970 = $valueHolder42970;

        return $this->valueHolder42970->isOpen();
    }

    public function getUnitOfWork()
    {
        $this->initializerc8a19 && ($this->initializerc8a19->__invoke($valueHolder42970, $this, 'getUnitOfWork', array(), $this->initializerc8a19) || 1) && $this->valueHolder42970 = $valueHolder42970;

        return $this->valueHolder42970->getUnitOfWork();
    }

    public function getHydrator($hydrationMode)
    {
        $this->initializerc8a19 && ($this->initializerc8a19->__invoke($valueHolder42970, $this, 'getHydrator', array('hydrationMode' => $hydrationMode), $this->initializerc8a19) || 1) && $this->valueHolder42970 = $valueHolder42970;

        return $this->valueHolder42970->getHydrator($hydrationMode);
    }

    public function newHydrator($hydrationMode)
    {
        $this->initializerc8a19 && ($this->initializerc8a19->__invoke($valueHolder42970, $this, 'newHydrator', array('hydrationMode' => $hydrationMode), $this->initializerc8a19) || 1) && $this->valueHolder42970 = $valueHolder42970;

        return $this->valueHolder42970->newHydrator($hydrationMode);
    }

    public function getProxyFactory()
    {
        $this->initializerc8a19 && ($this->initializerc8a19->__invoke($valueHolder42970, $this, 'getProxyFactory', array(), $this->initializerc8a19) || 1) && $this->valueHolder42970 = $valueHolder42970;

        return $this->valueHolder42970->getProxyFactory();
    }

    public function initializeObject($obj)
    {
        $this->initializerc8a19 && ($this->initializerc8a19->__invoke($valueHolder42970, $this, 'initializeObject', array('obj' => $obj), $this->initializerc8a19) || 1) && $this->valueHolder42970 = $valueHolder42970;

        return $this->valueHolder42970->initializeObject($obj);
    }

    public function getFilters()
    {
        $this->initializerc8a19 && ($this->initializerc8a19->__invoke($valueHolder42970, $this, 'getFilters', array(), $this->initializerc8a19) || 1) && $this->valueHolder42970 = $valueHolder42970;

        return $this->valueHolder42970->getFilters();
    }

    public function isFiltersStateClean()
    {
        $this->initializerc8a19 && ($this->initializerc8a19->__invoke($valueHolder42970, $this, 'isFiltersStateClean', array(), $this->initializerc8a19) || 1) && $this->valueHolder42970 = $valueHolder42970;

        return $this->valueHolder42970->isFiltersStateClean();
    }

    public function hasFilters()
    {
        $this->initializerc8a19 && ($this->initializerc8a19->__invoke($valueHolder42970, $this, 'hasFilters', array(), $this->initializerc8a19) || 1) && $this->valueHolder42970 = $valueHolder42970;

        return $this->valueHolder42970->hasFilters();
    }

    /**
     * Constructor for lazy initialization
     *
     * @param \Closure|null $initializer
     */
    public static function staticProxyConstructor($initializer)
    {
        static $reflection;

        $reflection = $reflection ?? new \ReflectionClass(__CLASS__);
        $instance   = $reflection->newInstanceWithoutConstructor();

        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $instance, 'Doctrine\\ORM\\EntityManager')->__invoke($instance);

        $instance->initializerc8a19 = $initializer;

        return $instance;
    }

    protected function __construct(\Doctrine\DBAL\Connection $conn, \Doctrine\ORM\Configuration $config, \Doctrine\Common\EventManager $eventManager)
    {
        static $reflection;

        if (! $this->valueHolder42970) {
            $reflection = $reflection ?? new \ReflectionClass('Doctrine\\ORM\\EntityManager');
            $this->valueHolder42970 = $reflection->newInstanceWithoutConstructor();
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);

        }

        $this->valueHolder42970->__construct($conn, $config, $eventManager);
    }

    public function & __get($name)
    {
        $this->initializerc8a19 && ($this->initializerc8a19->__invoke($valueHolder42970, $this, '__get', ['name' => $name], $this->initializerc8a19) || 1) && $this->valueHolder42970 = $valueHolder42970;

        if (isset(self::$publicProperties464ee[$name])) {
            return $this->valueHolder42970->$name;
        }

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder42970;

            $backtrace = debug_backtrace(false, 1);
            trigger_error(
                sprintf(
                    'Undefined property: %s::$%s in %s on line %s',
                    $realInstanceReflection->getName(),
                    $name,
                    $backtrace[0]['file'],
                    $backtrace[0]['line']
                ),
                \E_USER_NOTICE
            );
            return $targetObject->$name;
        }

        $targetObject = $this->valueHolder42970;
        $accessor = function & () use ($targetObject, $name) {
            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();

        return $returnValue;
    }

    public function __set($name, $value)
    {
        $this->initializerc8a19 && ($this->initializerc8a19->__invoke($valueHolder42970, $this, '__set', array('name' => $name, 'value' => $value), $this->initializerc8a19) || 1) && $this->valueHolder42970 = $valueHolder42970;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder42970;

            $targetObject->$name = $value;

            return $targetObject->$name;
        }

        $targetObject = $this->valueHolder42970;
        $accessor = function & () use ($targetObject, $name, $value) {
            $targetObject->$name = $value;

            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();

        return $returnValue;
    }

    public function __isset($name)
    {
        $this->initializerc8a19 && ($this->initializerc8a19->__invoke($valueHolder42970, $this, '__isset', array('name' => $name), $this->initializerc8a19) || 1) && $this->valueHolder42970 = $valueHolder42970;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder42970;

            return isset($targetObject->$name);
        }

        $targetObject = $this->valueHolder42970;
        $accessor = function () use ($targetObject, $name) {
            return isset($targetObject->$name);
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = $accessor();

        return $returnValue;
    }

    public function __unset($name)
    {
        $this->initializerc8a19 && ($this->initializerc8a19->__invoke($valueHolder42970, $this, '__unset', array('name' => $name), $this->initializerc8a19) || 1) && $this->valueHolder42970 = $valueHolder42970;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder42970;

            unset($targetObject->$name);

            return;
        }

        $targetObject = $this->valueHolder42970;
        $accessor = function () use ($targetObject, $name) {
            unset($targetObject->$name);

            return;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $accessor();
    }

    public function __clone()
    {
        $this->initializerc8a19 && ($this->initializerc8a19->__invoke($valueHolder42970, $this, '__clone', array(), $this->initializerc8a19) || 1) && $this->valueHolder42970 = $valueHolder42970;

        $this->valueHolder42970 = clone $this->valueHolder42970;
    }

    public function __sleep()
    {
        $this->initializerc8a19 && ($this->initializerc8a19->__invoke($valueHolder42970, $this, '__sleep', array(), $this->initializerc8a19) || 1) && $this->valueHolder42970 = $valueHolder42970;

        return array('valueHolder42970');
    }

    public function __wakeup()
    {
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);
    }

    public function setProxyInitializer(\Closure $initializer = null) : void
    {
        $this->initializerc8a19 = $initializer;
    }

    public function getProxyInitializer() : ?\Closure
    {
        return $this->initializerc8a19;
    }

    public function initializeProxy() : bool
    {
        return $this->initializerc8a19 && ($this->initializerc8a19->__invoke($valueHolder42970, $this, 'initializeProxy', array(), $this->initializerc8a19) || 1) && $this->valueHolder42970 = $valueHolder42970;
    }

    public function isProxyInitialized() : bool
    {
        return null !== $this->valueHolder42970;
    }

    public function getWrappedValueHolderValue()
    {
        return $this->valueHolder42970;
    }
}

if (!\class_exists('EntityManager_9a5be93', false)) {
    \class_alias(__NAMESPACE__.'\\EntityManager_9a5be93', 'EntityManager_9a5be93', false);
}
