<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M17 8V5a1 1 0 0 0-1-1H6a2 2 0 0 0-2 2m0 0a2 2 0 0 0 2 2h12a1 1 0 0 1 1 1v3M4 6v12a2 2 0 0 0 2 2h12a1 1 0 0 0 1-1v-3m1-4v4h-4a2 2 0 0 1 0-4z\"/>";
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
