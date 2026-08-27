<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 4.25a2.5 2.5 0 0 0-1.929.927l-4.2 5.076a2.766 2.766 0 0 0-.007 3.486l4.213 5.092c.481.58 1.181.919 1.923.919a2.5 2.5 0 0 0 1.929-.927l4.2-5.076a2.766 2.766 0 0 0 .007-3.486L13.923 5.17A2.5 2.5 0 0 0 12 4.25\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  {...props}
/>
