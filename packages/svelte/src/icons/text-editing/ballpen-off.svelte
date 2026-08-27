<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m14 6 7 7-2 2m-9-5-4.172 4.172a2.828 2.828 0 1 0 4 4L14 14m2-2 4.414-4.414a2 2 0 0 0 0-2.83l-1.171-1.17a2 2 0 0 0-2.829 0L12 8M4 20l1.768-1.768M3 3l18 18\"/>";
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
