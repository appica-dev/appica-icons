<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M18 12.5V11a7 7 0 0 0-4-6 2 2 0 1 0-4 0 7 7 0 0 0-4 6v3a4 4 0 0 1-2 3h11v1a3 3 0 0 1-6 0v-1m10-1v3m0 3v.01\"/>";
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
