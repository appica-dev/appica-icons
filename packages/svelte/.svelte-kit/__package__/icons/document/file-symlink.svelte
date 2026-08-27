<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4 21v-4a3 3 0 0 1 3-3h5m0 0-3 3m3-3-3-3m5-8v4a1 1 0 0 0 1 1h4m-5-5H7a2 2 0 0 0-2 2v6m9-8 5 5m0 0v11a2 2 0 0 1-2 2H7.5\"/>";
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
