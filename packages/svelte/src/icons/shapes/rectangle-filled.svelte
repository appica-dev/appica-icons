<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M18.825 4.25H5.175c-.776 0-1.52.306-2.068.851a2.9 2.9 0 0 0-.857 2.055v9.688c0 .77.308 1.51.857 2.055a2.94 2.94 0 0 0 2.068.851h13.65c.776 0 1.52-.306 2.068-.851a2.9 2.9 0 0 0 .857-2.055V7.156c0-.77-.308-1.51-.857-2.055a2.94 2.94 0 0 0-2.068-.851\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  {...props}
/>
