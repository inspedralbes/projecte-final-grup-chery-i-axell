<?php

namespace ContainerRurr5GL;
include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'doctrine'.\DIRECTORY_SEPARATOR.'persistence'.\DIRECTORY_SEPARATOR.'src'.\DIRECTORY_SEPARATOR.'Persistence'.\DIRECTORY_SEPARATOR.'ObjectManager.php';
include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'doctrine'.\DIRECTORY_SEPARATOR.'orm'.\DIRECTORY_SEPARATOR.'lib'.\DIRECTORY_SEPARATOR.'Doctrine'.\DIRECTORY_SEPARATOR.'ORM'.\DIRECTORY_SEPARATOR.'EntityManagerInterface.php';
include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'doctrine'.\DIRECTORY_SEPARATOR.'orm'.\DIRECTORY_SEPARATOR.'lib'.\DIRECTORY_SEPARATOR.'Doctrine'.\DIRECTORY_SEPARATOR.'ORM'.\DIRECTORY_SEPARATOR.'EntityManager.php';

class EntityManager_9a5be93 extends \Doctrine\ORM\EntityManager implements \ProxyManager\Proxy\VirtualProxyInterface
{
    /**
     * @var \Doctrine\ORM\EntityManager|null wrapped object, if the proxy is initialized
     */
    private $valueHolder32088 = null;

    /**
     * @var \Closure|null initializer responsible for generating the wrapped object
     */
    private $initializere95b1 = null;

    /**
     * @var bool[] map of public properties of the parent class
     */
    private static $publicPropertiesf568b = [
        
    ];

    public function getConnection()
    {
        $this->initializere95b1 && ($this->initializere95b1->__invoke($valueHolder32088, $this, 'getConnection', array(), $this->initializere95b1) || 1) && $this->valueHolder32088 = $valueHolder32088;

        return $this->valueHolder32088->getConnection();
    }

    public function getMetadataFactory()
    {
        $this->initializere95b1 && ($this->initializere95b1->__invoke($valueHolder32088, $this, 'getMetadataFactory', array(), $this->initializere95b1) || 1) && $this->valueHolder32088 = $valueHolder32088;

        return $this->valueHolder32088->getMetadataFactory();
    }

    public function getExpressionBuilder()
    {
        $this->initializere95b1 && ($this->initializere95b1->__invoke($valueHolder32088, $this, 'getExpressionBuilder', array(), $this->initializere95b1) || 1) && $this->valueHolder32088 = $valueHolder32088;

        return $this->valueHolder32088->getExpressionBuilder();
    }

    public function beginTransaction()
    {
        $this->initializere95b1 && ($this->initializere95b1->__invoke($valueHolder32088, $this, 'beginTransaction', array(), $this->initializere95b1) || 1) && $this->valueHolder32088 = $valueHolder32088;

        return $this->valueHolder32088->beginTransaction();
    }

    public function getCache()
    {
        $this->initializere95b1 && ($this->initializere95b1->__invoke($valueHolder32088, $this, 'getCache', array(), $this->initializere95b1) || 1) && $this->valueHolder32088 = $valueHolder32088;

        return $this->valueHolder32088->getCache();
    }

    public function transactional($func)
    {
        $this->initializere95b1 && ($this->initializere95b1->__invoke($valueHolder32088, $this, 'transactional', array('func' => $func), $this->initializere95b1) || 1) && $this->valueHolder32088 = $valueHolder32088;

        return $this->valueHolder32088->transactional($func);
    }

    public function wrapInTransaction(callable $func)
    {
        $this->initializere95b1 && ($this->initializere95b1->__invoke($valueHolder32088, $this, 'wrapInTransaction', array('func' => $func), $this->initializere95b1) || 1) && $this->valueHolder32088 = $valueHolder32088;

        return $this->valueHolder32088->wrapInTransaction($func);
    }

    public function commit()
    {
        $this->initializere95b1 && ($this->initializere95b1->__invoke($valueHolder32088, $this, 'commit', array(), $this->initializere95b1) || 1) && $this->valueHolder32088 = $valueHolder32088;

        return $this->valueHolder32088->commit();
    }

    public function rollback()
    {
        $this->initializere95b1 && ($this->initializere95b1->__invoke($valueHolder32088, $this, 'rollback', array(), $this->initializere95b1) || 1) && $this->valueHolder32088 = $valueHolder32088;

        return $this->valueHolder32088->rollback();
    }

    public function getClassMetadata($className)
    {
        $this->initializere95b1 && ($this->initializere95b1->__invoke($valueHolder32088, $this, 'getClassMetadata', array('className' => $className), $this->initializere95b1) || 1) && $this->valueHolder32088 = $valueHolder32088;

        return $this->valueHolder32088->getClassMetadata($className);
    }

    public function createQuery($dql = '')
    {
        $this->initializere95b1 && ($this->initializere95b1->__invoke($valueHolder32088, $this, 'createQuery', array('dql' => $dql), $this->initializere95b1) || 1) && $this->valueHolder32088 = $valueHolder32088;

        return $this->valueHolder32088->createQuery($dql);
    }

    public function createNamedQuery($name)
    {
        $this->initializere95b1 && ($this->initializere95b1->__invoke($valueHolder32088, $this, 'createNamedQuery', array('name' => $name), $this->initializere95b1) || 1) && $this->valueHolder32088 = $valueHolder32088;

        return $this->valueHolder32088->createNamedQuery($name);
    }

    public function createNativeQuery($sql, \Doctrine\ORM\Query\ResultSetMapping $rsm)
    {
        $this->initializere95b1 && ($this->initializere95b1->__invoke($valueHolder32088, $this, 'createNativeQuery', array('sql' => $sql, 'rsm' => $rsm), $this->initializere95b1) || 1) && $this->valueHolder32088 = $valueHolder32088;

        return $this->valueHolder32088->createNativeQuery($sql, $rsm);
    }

    public function createNamedNativeQuery($name)
    {
        $this->initializere95b1 && ($this->initializere95b1->__invoke($valueHolder32088, $this, 'createNamedNativeQuery', array('name' => $name), $this->initializere95b1) || 1) && $this->valueHolder32088 = $valueHolder32088;

        return $this->valueHolder32088->createNamedNativeQuery($name);
    }

    public function createQueryBuilder()
    {
        $this->initializere95b1 && ($this->initializere95b1->__invoke($valueHolder32088, $this, 'createQueryBuilder', array(), $this->initializere95b1) || 1) && $this->valueHolder32088 = $valueHolder32088;

        return $this->valueHolder32088->createQueryBuilder();
    }

    public function flush($entity = null)
    {
        $this->initializere95b1 && ($this->initializere95b1->__invoke($valueHolder32088, $this, 'flush', array('entity' => $entity), $this->initializere95b1) || 1) && $this->valueHolder32088 = $valueHolder32088;

        return $this->valueHolder32088->flush($entity);
    }

    public function find($className, $id, $lockMode = null, $lockVersion = null)
    {
        $this->initializere95b1 && ($this->initializere95b1->__invoke($valueHolder32088, $this, 'find', array('className' => $className, 'id' => $id, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializere95b1) || 1) && $this->valueHolder32088 = $valueHolder32088;

        return $this->valueHolder32088->find($className, $id, $lockMode, $lockVersion);
    }

    public function getReference($entityName, $id)
    {
        $this->initializere95b1 && ($this->initializere95b1->__invoke($valueHolder32088, $this, 'getReference', array('entityName' => $entityName, 'id' => $id), $this->initializere95b1) || 1) && $this->valueHolder32088 = $valueHolder32088;

        return $this->valueHolder32088->getReference($entityName, $id);
    }

    public function getPartialReference($entityName, $identifier)
    {
        $this->initializere95b1 && ($this->initializere95b1->__invoke($valueHolder32088, $this, 'getPartialReference', array('entityName' => $entityName, 'identifier' => $identifier), $this->initializere95b1) || 1) && $this->valueHolder32088 = $valueHolder32088;

        return $this->valueHolder32088->getPartialReference($entityName, $identifier);
    }

    public function clear($entityName = null)
    {
        $this->initializere95b1 && ($this->initializere95b1->__invoke($valueHolder32088, $this, 'clear', array('entityName' => $entityName), $this->initializere95b1) || 1) && $this->valueHolder32088 = $valueHolder32088;

        return $this->valueHolder32088->clear($entityName);
    }

    public function close()
    {
        $this->initializere95b1 && ($this->initializere95b1->__invoke($valueHolder32088, $this, 'close', array(), $this->initializere95b1) || 1) && $this->valueHolder32088 = $valueHolder32088;

        return $this->valueHolder32088->close();
    }

    public function persist($entity)
    {
        $this->initializere95b1 && ($this->initializere95b1->__invoke($valueHolder32088, $this, 'persist', array('entity' => $entity), $this->initializere95b1) || 1) && $this->valueHolder32088 = $valueHolder32088;

        return $this->valueHolder32088->persist($entity);
    }

    public function remove($entity)
    {
        $this->initializere95b1 && ($this->initializere95b1->__invoke($valueHolder32088, $this, 'remove', array('entity' => $entity), $this->initializere95b1) || 1) && $this->valueHolder32088 = $valueHolder32088;

        return $this->valueHolder32088->remove($entity);
    }

    public function refresh($entity)
    {
        $this->initializere95b1 && ($this->initializere95b1->__invoke($valueHolder32088, $this, 'refresh', array('entity' => $entity), $this->initializere95b1) || 1) && $this->valueHolder32088 = $valueHolder32088;

        return $this->valueHolder32088->refresh($entity);
    }

    public function detach($entity)
    {
        $this->initializere95b1 && ($this->initializere95b1->__invoke($valueHolder32088, $this, 'detach', array('entity' => $entity), $this->initializere95b1) || 1) && $this->valueHolder32088 = $valueHolder32088;

        return $this->valueHolder32088->detach($entity);
    }

    public function merge($entity)
    {
        $this->initializere95b1 && ($this->initializere95b1->__invoke($valueHolder32088, $this, 'merge', array('entity' => $entity), $this->initializere95b1) || 1) && $this->valueHolder32088 = $valueHolder32088;

        return $this->valueHolder32088->merge($entity);
    }

    public function copy($entity, $deep = false)
    {
        $this->initializere95b1 && ($this->initializere95b1->__invoke($valueHolder32088, $this, 'copy', array('entity' => $entity, 'deep' => $deep), $this->initializere95b1) || 1) && $this->valueHolder32088 = $valueHolder32088;

        return $this->valueHolder32088->copy($entity, $deep);
    }

    public function lock($entity, $lockMode, $lockVersion = null)
    {
        $this->initializere95b1 && ($this->initializere95b1->__invoke($valueHolder32088, $this, 'lock', array('entity' => $entity, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializere95b1) || 1) && $this->valueHolder32088 = $valueHolder32088;

        return $this->valueHolder32088->lock($entity, $lockMode, $lockVersion);
    }

    public function getRepository($entityName)
    {
        $this->initializere95b1 && ($this->initializere95b1->__invoke($valueHolder32088, $this, 'getRepository', array('entityName' => $entityName), $this->initializere95b1) || 1) && $this->valueHolder32088 = $valueHolder32088;

        return $this->valueHolder32088->getRepository($entityName);
    }

    public function contains($entity)
    {
        $this->initializere95b1 && ($this->initializere95b1->__invoke($valueHolder32088, $this, 'contains', array('entity' => $entity), $this->initializere95b1) || 1) && $this->valueHolder32088 = $valueHolder32088;

        return $this->valueHolder32088->contains($entity);
    }

    public function getEventManager()
    {
        $this->initializere95b1 && ($this->initializere95b1->__invoke($valueHolder32088, $this, 'getEventManager', array(), $this->initializere95b1) || 1) && $this->valueHolder32088 = $valueHolder32088;

        return $this->valueHolder32088->getEventManager();
    }

    public function getConfiguration()
    {
        $this->initializere95b1 && ($this->initializere95b1->__invoke($valueHolder32088, $this, 'getConfiguration', array(), $this->initializere95b1) || 1) && $this->valueHolder32088 = $valueHolder32088;

        return $this->valueHolder32088->getConfiguration();
    }

    public function isOpen()
    {
        $this->initializere95b1 && ($this->initializere95b1->__invoke($valueHolder32088, $this, 'isOpen', array(), $this->initializere95b1) || 1) && $this->valueHolder32088 = $valueHolder32088;

        return $this->valueHolder32088->isOpen();
    }

    public function getUnitOfWork()
    {
        $this->initializere95b1 && ($this->initializere95b1->__invoke($valueHolder32088, $this, 'getUnitOfWork', array(), $this->initializere95b1) || 1) && $this->valueHolder32088 = $valueHolder32088;

        return $this->valueHolder32088->getUnitOfWork();
    }

    public function getHydrator($hydrationMode)
    {
        $this->initializere95b1 && ($this->initializere95b1->__invoke($valueHolder32088, $this, 'getHydrator', array('hydrationMode' => $hydrationMode), $this->initializere95b1) || 1) && $this->valueHolder32088 = $valueHolder32088;

        return $this->valueHolder32088->getHydrator($hydrationMode);
    }

    public function newHydrator($hydrationMode)
    {
        $this->initializere95b1 && ($this->initializere95b1->__invoke($valueHolder32088, $this, 'newHydrator', array('hydrationMode' => $hydrationMode), $this->initializere95b1) || 1) && $this->valueHolder32088 = $valueHolder32088;

        return $this->valueHolder32088->newHydrator($hydrationMode);
    }

    public function getProxyFactory()
    {
        $this->initializere95b1 && ($this->initializere95b1->__invoke($valueHolder32088, $this, 'getProxyFactory', array(), $this->initializere95b1) || 1) && $this->valueHolder32088 = $valueHolder32088;

        return $this->valueHolder32088->getProxyFactory();
    }

    public function initializeObject($obj)
    {
        $this->initializere95b1 && ($this->initializere95b1->__invoke($valueHolder32088, $this, 'initializeObject', array('obj' => $obj), $this->initializere95b1) || 1) && $this->valueHolder32088 = $valueHolder32088;

        return $this->valueHolder32088->initializeObject($obj);
    }

    public function getFilters()
    {
        $this->initializere95b1 && ($this->initializere95b1->__invoke($valueHolder32088, $this, 'getFilters', array(), $this->initializere95b1) || 1) && $this->valueHolder32088 = $valueHolder32088;

        return $this->valueHolder32088->getFilters();
    }

    public function isFiltersStateClean()
    {
        $this->initializere95b1 && ($this->initializere95b1->__invoke($valueHolder32088, $this, 'isFiltersStateClean', array(), $this->initializere95b1) || 1) && $this->valueHolder32088 = $valueHolder32088;

        return $this->valueHolder32088->isFiltersStateClean();
    }

    public function hasFilters()
    {
        $this->initializere95b1 && ($this->initializere95b1->__invoke($valueHolder32088, $this, 'hasFilters', array(), $this->initializere95b1) || 1) && $this->valueHolder32088 = $valueHolder32088;

        return $this->valueHolder32088->hasFilters();
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

        $instance->initializere95b1 = $initializer;

        return $instance;
    }

    protected function __construct(\Doctrine\DBAL\Connection $conn, \Doctrine\ORM\Configuration $config, \Doctrine\Common\EventManager $eventManager)
    {
        static $reflection;

        if (! $this->valueHolder32088) {
            $reflection = $reflection ?? new \ReflectionClass('Doctrine\\ORM\\EntityManager');
            $this->valueHolder32088 = $reflection->newInstanceWithoutConstructor();
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);

        }

        $this->valueHolder32088->__construct($conn, $config, $eventManager);
    }

    public function & __get($name)
    {
        $this->initializere95b1 && ($this->initializere95b1->__invoke($valueHolder32088, $this, '__get', ['name' => $name], $this->initializere95b1) || 1) && $this->valueHolder32088 = $valueHolder32088;

        if (isset(self::$publicPropertiesf568b[$name])) {
            return $this->valueHolder32088->$name;
        }

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder32088;

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

        $targetObject = $this->valueHolder32088;
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
        $this->initializere95b1 && ($this->initializere95b1->__invoke($valueHolder32088, $this, '__set', array('name' => $name, 'value' => $value), $this->initializere95b1) || 1) && $this->valueHolder32088 = $valueHolder32088;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder32088;

            $targetObject->$name = $value;

            return $targetObject->$name;
        }

        $targetObject = $this->valueHolder32088;
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
        $this->initializere95b1 && ($this->initializere95b1->__invoke($valueHolder32088, $this, '__isset', array('name' => $name), $this->initializere95b1) || 1) && $this->valueHolder32088 = $valueHolder32088;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder32088;

            return isset($targetObject->$name);
        }

        $targetObject = $this->valueHolder32088;
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
        $this->initializere95b1 && ($this->initializere95b1->__invoke($valueHolder32088, $this, '__unset', array('name' => $name), $this->initializere95b1) || 1) && $this->valueHolder32088 = $valueHolder32088;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder32088;

            unset($targetObject->$name);

            return;
        }

        $targetObject = $this->valueHolder32088;
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
        $this->initializere95b1 && ($this->initializere95b1->__invoke($valueHolder32088, $this, '__clone', array(), $this->initializere95b1) || 1) && $this->valueHolder32088 = $valueHolder32088;

        $this->valueHolder32088 = clone $this->valueHolder32088;
    }

    public function __sleep()
    {
        $this->initializere95b1 && ($this->initializere95b1->__invoke($valueHolder32088, $this, '__sleep', array(), $this->initializere95b1) || 1) && $this->valueHolder32088 = $valueHolder32088;

        return array('valueHolder32088');
    }

    public function __wakeup()
    {
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);
    }

    public function setProxyInitializer(\Closure $initializer = null) : void
    {
        $this->initializere95b1 = $initializer;
    }

    public function getProxyInitializer() : ?\Closure
    {
        return $this->initializere95b1;
    }

    public function initializeProxy() : bool
    {
        return $this->initializere95b1 && ($this->initializere95b1->__invoke($valueHolder32088, $this, 'initializeProxy', array(), $this->initializere95b1) || 1) && $this->valueHolder32088 = $valueHolder32088;
    }

    public function isProxyInitialized() : bool
    {
        return null !== $this->valueHolder32088;
    }

    public function getWrappedValueHolderValue()
    {
        return $this->valueHolder32088;
    }
}

if (!\class_exists('EntityManager_9a5be93', false)) {
    \class_alias(__NAMESPACE__.'\\EntityManager_9a5be93', 'EntityManager_9a5be93', false);
}
