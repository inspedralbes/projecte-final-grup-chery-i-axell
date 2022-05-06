<?php

namespace ContainerCvYJx9P;
include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'doctrine'.\DIRECTORY_SEPARATOR.'persistence'.\DIRECTORY_SEPARATOR.'src'.\DIRECTORY_SEPARATOR.'Persistence'.\DIRECTORY_SEPARATOR.'ObjectManager.php';
include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'doctrine'.\DIRECTORY_SEPARATOR.'orm'.\DIRECTORY_SEPARATOR.'lib'.\DIRECTORY_SEPARATOR.'Doctrine'.\DIRECTORY_SEPARATOR.'ORM'.\DIRECTORY_SEPARATOR.'EntityManagerInterface.php';
include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'doctrine'.\DIRECTORY_SEPARATOR.'orm'.\DIRECTORY_SEPARATOR.'lib'.\DIRECTORY_SEPARATOR.'Doctrine'.\DIRECTORY_SEPARATOR.'ORM'.\DIRECTORY_SEPARATOR.'EntityManager.php';

class EntityManager_9a5be93 extends \Doctrine\ORM\EntityManager implements \ProxyManager\Proxy\VirtualProxyInterface
{
    /**
     * @var \Doctrine\ORM\EntityManager|null wrapped object, if the proxy is initialized
     */
    private $valueHolderb4b7b = null;

    /**
     * @var \Closure|null initializer responsible for generating the wrapped object
     */
    private $initializer6336c = null;

    /**
     * @var bool[] map of public properties of the parent class
     */
    private static $publicPropertiesca0e3 = [
        
    ];

    public function getConnection()
    {
        $this->initializer6336c && ($this->initializer6336c->__invoke($valueHolderb4b7b, $this, 'getConnection', array(), $this->initializer6336c) || 1) && $this->valueHolderb4b7b = $valueHolderb4b7b;

        return $this->valueHolderb4b7b->getConnection();
    }

    public function getMetadataFactory()
    {
        $this->initializer6336c && ($this->initializer6336c->__invoke($valueHolderb4b7b, $this, 'getMetadataFactory', array(), $this->initializer6336c) || 1) && $this->valueHolderb4b7b = $valueHolderb4b7b;

        return $this->valueHolderb4b7b->getMetadataFactory();
    }

    public function getExpressionBuilder()
    {
        $this->initializer6336c && ($this->initializer6336c->__invoke($valueHolderb4b7b, $this, 'getExpressionBuilder', array(), $this->initializer6336c) || 1) && $this->valueHolderb4b7b = $valueHolderb4b7b;

        return $this->valueHolderb4b7b->getExpressionBuilder();
    }

    public function beginTransaction()
    {
        $this->initializer6336c && ($this->initializer6336c->__invoke($valueHolderb4b7b, $this, 'beginTransaction', array(), $this->initializer6336c) || 1) && $this->valueHolderb4b7b = $valueHolderb4b7b;

        return $this->valueHolderb4b7b->beginTransaction();
    }

    public function getCache()
    {
        $this->initializer6336c && ($this->initializer6336c->__invoke($valueHolderb4b7b, $this, 'getCache', array(), $this->initializer6336c) || 1) && $this->valueHolderb4b7b = $valueHolderb4b7b;

        return $this->valueHolderb4b7b->getCache();
    }

    public function transactional($func)
    {
        $this->initializer6336c && ($this->initializer6336c->__invoke($valueHolderb4b7b, $this, 'transactional', array('func' => $func), $this->initializer6336c) || 1) && $this->valueHolderb4b7b = $valueHolderb4b7b;

        return $this->valueHolderb4b7b->transactional($func);
    }

    public function wrapInTransaction(callable $func)
    {
        $this->initializer6336c && ($this->initializer6336c->__invoke($valueHolderb4b7b, $this, 'wrapInTransaction', array('func' => $func), $this->initializer6336c) || 1) && $this->valueHolderb4b7b = $valueHolderb4b7b;

        return $this->valueHolderb4b7b->wrapInTransaction($func);
    }

    public function commit()
    {
        $this->initializer6336c && ($this->initializer6336c->__invoke($valueHolderb4b7b, $this, 'commit', array(), $this->initializer6336c) || 1) && $this->valueHolderb4b7b = $valueHolderb4b7b;

        return $this->valueHolderb4b7b->commit();
    }

    public function rollback()
    {
        $this->initializer6336c && ($this->initializer6336c->__invoke($valueHolderb4b7b, $this, 'rollback', array(), $this->initializer6336c) || 1) && $this->valueHolderb4b7b = $valueHolderb4b7b;

        return $this->valueHolderb4b7b->rollback();
    }

    public function getClassMetadata($className)
    {
        $this->initializer6336c && ($this->initializer6336c->__invoke($valueHolderb4b7b, $this, 'getClassMetadata', array('className' => $className), $this->initializer6336c) || 1) && $this->valueHolderb4b7b = $valueHolderb4b7b;

        return $this->valueHolderb4b7b->getClassMetadata($className);
    }

    public function createQuery($dql = '')
    {
        $this->initializer6336c && ($this->initializer6336c->__invoke($valueHolderb4b7b, $this, 'createQuery', array('dql' => $dql), $this->initializer6336c) || 1) && $this->valueHolderb4b7b = $valueHolderb4b7b;

        return $this->valueHolderb4b7b->createQuery($dql);
    }

    public function createNamedQuery($name)
    {
        $this->initializer6336c && ($this->initializer6336c->__invoke($valueHolderb4b7b, $this, 'createNamedQuery', array('name' => $name), $this->initializer6336c) || 1) && $this->valueHolderb4b7b = $valueHolderb4b7b;

        return $this->valueHolderb4b7b->createNamedQuery($name);
    }

    public function createNativeQuery($sql, \Doctrine\ORM\Query\ResultSetMapping $rsm)
    {
        $this->initializer6336c && ($this->initializer6336c->__invoke($valueHolderb4b7b, $this, 'createNativeQuery', array('sql' => $sql, 'rsm' => $rsm), $this->initializer6336c) || 1) && $this->valueHolderb4b7b = $valueHolderb4b7b;

        return $this->valueHolderb4b7b->createNativeQuery($sql, $rsm);
    }

    public function createNamedNativeQuery($name)
    {
        $this->initializer6336c && ($this->initializer6336c->__invoke($valueHolderb4b7b, $this, 'createNamedNativeQuery', array('name' => $name), $this->initializer6336c) || 1) && $this->valueHolderb4b7b = $valueHolderb4b7b;

        return $this->valueHolderb4b7b->createNamedNativeQuery($name);
    }

    public function createQueryBuilder()
    {
        $this->initializer6336c && ($this->initializer6336c->__invoke($valueHolderb4b7b, $this, 'createQueryBuilder', array(), $this->initializer6336c) || 1) && $this->valueHolderb4b7b = $valueHolderb4b7b;

        return $this->valueHolderb4b7b->createQueryBuilder();
    }

    public function flush($entity = null)
    {
        $this->initializer6336c && ($this->initializer6336c->__invoke($valueHolderb4b7b, $this, 'flush', array('entity' => $entity), $this->initializer6336c) || 1) && $this->valueHolderb4b7b = $valueHolderb4b7b;

        return $this->valueHolderb4b7b->flush($entity);
    }

    public function find($className, $id, $lockMode = null, $lockVersion = null)
    {
        $this->initializer6336c && ($this->initializer6336c->__invoke($valueHolderb4b7b, $this, 'find', array('className' => $className, 'id' => $id, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializer6336c) || 1) && $this->valueHolderb4b7b = $valueHolderb4b7b;

        return $this->valueHolderb4b7b->find($className, $id, $lockMode, $lockVersion);
    }

    public function getReference($entityName, $id)
    {
        $this->initializer6336c && ($this->initializer6336c->__invoke($valueHolderb4b7b, $this, 'getReference', array('entityName' => $entityName, 'id' => $id), $this->initializer6336c) || 1) && $this->valueHolderb4b7b = $valueHolderb4b7b;

        return $this->valueHolderb4b7b->getReference($entityName, $id);
    }

    public function getPartialReference($entityName, $identifier)
    {
        $this->initializer6336c && ($this->initializer6336c->__invoke($valueHolderb4b7b, $this, 'getPartialReference', array('entityName' => $entityName, 'identifier' => $identifier), $this->initializer6336c) || 1) && $this->valueHolderb4b7b = $valueHolderb4b7b;

        return $this->valueHolderb4b7b->getPartialReference($entityName, $identifier);
    }

    public function clear($entityName = null)
    {
        $this->initializer6336c && ($this->initializer6336c->__invoke($valueHolderb4b7b, $this, 'clear', array('entityName' => $entityName), $this->initializer6336c) || 1) && $this->valueHolderb4b7b = $valueHolderb4b7b;

        return $this->valueHolderb4b7b->clear($entityName);
    }

    public function close()
    {
        $this->initializer6336c && ($this->initializer6336c->__invoke($valueHolderb4b7b, $this, 'close', array(), $this->initializer6336c) || 1) && $this->valueHolderb4b7b = $valueHolderb4b7b;

        return $this->valueHolderb4b7b->close();
    }

    public function persist($entity)
    {
        $this->initializer6336c && ($this->initializer6336c->__invoke($valueHolderb4b7b, $this, 'persist', array('entity' => $entity), $this->initializer6336c) || 1) && $this->valueHolderb4b7b = $valueHolderb4b7b;

        return $this->valueHolderb4b7b->persist($entity);
    }

    public function remove($entity)
    {
        $this->initializer6336c && ($this->initializer6336c->__invoke($valueHolderb4b7b, $this, 'remove', array('entity' => $entity), $this->initializer6336c) || 1) && $this->valueHolderb4b7b = $valueHolderb4b7b;

        return $this->valueHolderb4b7b->remove($entity);
    }

    public function refresh($entity)
    {
        $this->initializer6336c && ($this->initializer6336c->__invoke($valueHolderb4b7b, $this, 'refresh', array('entity' => $entity), $this->initializer6336c) || 1) && $this->valueHolderb4b7b = $valueHolderb4b7b;

        return $this->valueHolderb4b7b->refresh($entity);
    }

    public function detach($entity)
    {
        $this->initializer6336c && ($this->initializer6336c->__invoke($valueHolderb4b7b, $this, 'detach', array('entity' => $entity), $this->initializer6336c) || 1) && $this->valueHolderb4b7b = $valueHolderb4b7b;

        return $this->valueHolderb4b7b->detach($entity);
    }

    public function merge($entity)
    {
        $this->initializer6336c && ($this->initializer6336c->__invoke($valueHolderb4b7b, $this, 'merge', array('entity' => $entity), $this->initializer6336c) || 1) && $this->valueHolderb4b7b = $valueHolderb4b7b;

        return $this->valueHolderb4b7b->merge($entity);
    }

    public function copy($entity, $deep = false)
    {
        $this->initializer6336c && ($this->initializer6336c->__invoke($valueHolderb4b7b, $this, 'copy', array('entity' => $entity, 'deep' => $deep), $this->initializer6336c) || 1) && $this->valueHolderb4b7b = $valueHolderb4b7b;

        return $this->valueHolderb4b7b->copy($entity, $deep);
    }

    public function lock($entity, $lockMode, $lockVersion = null)
    {
        $this->initializer6336c && ($this->initializer6336c->__invoke($valueHolderb4b7b, $this, 'lock', array('entity' => $entity, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializer6336c) || 1) && $this->valueHolderb4b7b = $valueHolderb4b7b;

        return $this->valueHolderb4b7b->lock($entity, $lockMode, $lockVersion);
    }

    public function getRepository($entityName)
    {
        $this->initializer6336c && ($this->initializer6336c->__invoke($valueHolderb4b7b, $this, 'getRepository', array('entityName' => $entityName), $this->initializer6336c) || 1) && $this->valueHolderb4b7b = $valueHolderb4b7b;

        return $this->valueHolderb4b7b->getRepository($entityName);
    }

    public function contains($entity)
    {
        $this->initializer6336c && ($this->initializer6336c->__invoke($valueHolderb4b7b, $this, 'contains', array('entity' => $entity), $this->initializer6336c) || 1) && $this->valueHolderb4b7b = $valueHolderb4b7b;

        return $this->valueHolderb4b7b->contains($entity);
    }

    public function getEventManager()
    {
        $this->initializer6336c && ($this->initializer6336c->__invoke($valueHolderb4b7b, $this, 'getEventManager', array(), $this->initializer6336c) || 1) && $this->valueHolderb4b7b = $valueHolderb4b7b;

        return $this->valueHolderb4b7b->getEventManager();
    }

    public function getConfiguration()
    {
        $this->initializer6336c && ($this->initializer6336c->__invoke($valueHolderb4b7b, $this, 'getConfiguration', array(), $this->initializer6336c) || 1) && $this->valueHolderb4b7b = $valueHolderb4b7b;

        return $this->valueHolderb4b7b->getConfiguration();
    }

    public function isOpen()
    {
        $this->initializer6336c && ($this->initializer6336c->__invoke($valueHolderb4b7b, $this, 'isOpen', array(), $this->initializer6336c) || 1) && $this->valueHolderb4b7b = $valueHolderb4b7b;

        return $this->valueHolderb4b7b->isOpen();
    }

    public function getUnitOfWork()
    {
        $this->initializer6336c && ($this->initializer6336c->__invoke($valueHolderb4b7b, $this, 'getUnitOfWork', array(), $this->initializer6336c) || 1) && $this->valueHolderb4b7b = $valueHolderb4b7b;

        return $this->valueHolderb4b7b->getUnitOfWork();
    }

    public function getHydrator($hydrationMode)
    {
        $this->initializer6336c && ($this->initializer6336c->__invoke($valueHolderb4b7b, $this, 'getHydrator', array('hydrationMode' => $hydrationMode), $this->initializer6336c) || 1) && $this->valueHolderb4b7b = $valueHolderb4b7b;

        return $this->valueHolderb4b7b->getHydrator($hydrationMode);
    }

    public function newHydrator($hydrationMode)
    {
        $this->initializer6336c && ($this->initializer6336c->__invoke($valueHolderb4b7b, $this, 'newHydrator', array('hydrationMode' => $hydrationMode), $this->initializer6336c) || 1) && $this->valueHolderb4b7b = $valueHolderb4b7b;

        return $this->valueHolderb4b7b->newHydrator($hydrationMode);
    }

    public function getProxyFactory()
    {
        $this->initializer6336c && ($this->initializer6336c->__invoke($valueHolderb4b7b, $this, 'getProxyFactory', array(), $this->initializer6336c) || 1) && $this->valueHolderb4b7b = $valueHolderb4b7b;

        return $this->valueHolderb4b7b->getProxyFactory();
    }

    public function initializeObject($obj)
    {
        $this->initializer6336c && ($this->initializer6336c->__invoke($valueHolderb4b7b, $this, 'initializeObject', array('obj' => $obj), $this->initializer6336c) || 1) && $this->valueHolderb4b7b = $valueHolderb4b7b;

        return $this->valueHolderb4b7b->initializeObject($obj);
    }

    public function getFilters()
    {
        $this->initializer6336c && ($this->initializer6336c->__invoke($valueHolderb4b7b, $this, 'getFilters', array(), $this->initializer6336c) || 1) && $this->valueHolderb4b7b = $valueHolderb4b7b;

        return $this->valueHolderb4b7b->getFilters();
    }

    public function isFiltersStateClean()
    {
        $this->initializer6336c && ($this->initializer6336c->__invoke($valueHolderb4b7b, $this, 'isFiltersStateClean', array(), $this->initializer6336c) || 1) && $this->valueHolderb4b7b = $valueHolderb4b7b;

        return $this->valueHolderb4b7b->isFiltersStateClean();
    }

    public function hasFilters()
    {
        $this->initializer6336c && ($this->initializer6336c->__invoke($valueHolderb4b7b, $this, 'hasFilters', array(), $this->initializer6336c) || 1) && $this->valueHolderb4b7b = $valueHolderb4b7b;

        return $this->valueHolderb4b7b->hasFilters();
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

        $instance->initializer6336c = $initializer;

        return $instance;
    }

    protected function __construct(\Doctrine\DBAL\Connection $conn, \Doctrine\ORM\Configuration $config, \Doctrine\Common\EventManager $eventManager)
    {
        static $reflection;

        if (! $this->valueHolderb4b7b) {
            $reflection = $reflection ?? new \ReflectionClass('Doctrine\\ORM\\EntityManager');
            $this->valueHolderb4b7b = $reflection->newInstanceWithoutConstructor();
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);

        }

        $this->valueHolderb4b7b->__construct($conn, $config, $eventManager);
    }

    public function & __get($name)
    {
        $this->initializer6336c && ($this->initializer6336c->__invoke($valueHolderb4b7b, $this, '__get', ['name' => $name], $this->initializer6336c) || 1) && $this->valueHolderb4b7b = $valueHolderb4b7b;

        if (isset(self::$publicPropertiesca0e3[$name])) {
            return $this->valueHolderb4b7b->$name;
        }

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolderb4b7b;

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

        $targetObject = $this->valueHolderb4b7b;
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
        $this->initializer6336c && ($this->initializer6336c->__invoke($valueHolderb4b7b, $this, '__set', array('name' => $name, 'value' => $value), $this->initializer6336c) || 1) && $this->valueHolderb4b7b = $valueHolderb4b7b;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolderb4b7b;

            $targetObject->$name = $value;

            return $targetObject->$name;
        }

        $targetObject = $this->valueHolderb4b7b;
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
        $this->initializer6336c && ($this->initializer6336c->__invoke($valueHolderb4b7b, $this, '__isset', array('name' => $name), $this->initializer6336c) || 1) && $this->valueHolderb4b7b = $valueHolderb4b7b;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolderb4b7b;

            return isset($targetObject->$name);
        }

        $targetObject = $this->valueHolderb4b7b;
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
        $this->initializer6336c && ($this->initializer6336c->__invoke($valueHolderb4b7b, $this, '__unset', array('name' => $name), $this->initializer6336c) || 1) && $this->valueHolderb4b7b = $valueHolderb4b7b;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolderb4b7b;

            unset($targetObject->$name);

            return;
        }

        $targetObject = $this->valueHolderb4b7b;
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
        $this->initializer6336c && ($this->initializer6336c->__invoke($valueHolderb4b7b, $this, '__clone', array(), $this->initializer6336c) || 1) && $this->valueHolderb4b7b = $valueHolderb4b7b;

        $this->valueHolderb4b7b = clone $this->valueHolderb4b7b;
    }

    public function __sleep()
    {
        $this->initializer6336c && ($this->initializer6336c->__invoke($valueHolderb4b7b, $this, '__sleep', array(), $this->initializer6336c) || 1) && $this->valueHolderb4b7b = $valueHolderb4b7b;

        return array('valueHolderb4b7b');
    }

    public function __wakeup()
    {
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);
    }

    public function setProxyInitializer(\Closure $initializer = null) : void
    {
        $this->initializer6336c = $initializer;
    }

    public function getProxyInitializer() : ?\Closure
    {
        return $this->initializer6336c;
    }

    public function initializeProxy() : bool
    {
        return $this->initializer6336c && ($this->initializer6336c->__invoke($valueHolderb4b7b, $this, 'initializeProxy', array(), $this->initializer6336c) || 1) && $this->valueHolderb4b7b = $valueHolderb4b7b;
    }

    public function isProxyInitialized() : bool
    {
        return null !== $this->valueHolderb4b7b;
    }

    public function getWrappedValueHolderValue()
    {
        return $this->valueHolderb4b7b;
    }
}

if (!\class_exists('EntityManager_9a5be93', false)) {
    \class_alias(__NAMESPACE__.'\\EntityManager_9a5be93', 'EntityManager_9a5be93', false);
}
