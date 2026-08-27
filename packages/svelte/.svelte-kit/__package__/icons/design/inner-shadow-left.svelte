<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7.757 16.243a6 6 0 0 1 0-8.486m-2.12-2.12a9 9 0 1 1 12.727 12.727A9 9 0 0 1 5.636 5.636\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  fill={"none"}
  stroke={"currentColor"}
  stroke-width={"1.5"}
  stroke-linecap={"round"}
  stroke-linejoin={"round"}
  {...props}
/>
