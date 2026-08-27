<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8.125 5.288a7.75 7.75 0 1 1-3.87 6.988L4.25 12l.005-.276a7.75 7.75 0 0 1 3.87-6.436\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  {...props}
/>
