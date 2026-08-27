<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m14 6 7 7-4 4M4 20l1.768-1.768m.06-.06a2.83 2.83 0 0 0 4 0L20.414 7.586a2 2 0 0 0 0-2.83l-1.171-1.17a2 2 0 0 0-2.829 0L5.828 14.172a2.83 2.83 0 0 0 0 4\"/>";
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
