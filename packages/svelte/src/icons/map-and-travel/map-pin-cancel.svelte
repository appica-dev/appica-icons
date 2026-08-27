<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12.463 21.431a2 2 0 0 1-1.876-.531l-4.244-4.243a8 8 0 1 1 13.594-4.655M17 21l4-4M9 11a3 3 0 1 0 6 0 3 3 0 0 0-6 0m7 8a3 3 0 1 0 6 0 3 3 0 0 0-6 0\"/>";
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
