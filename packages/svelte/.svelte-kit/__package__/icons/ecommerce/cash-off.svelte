<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M13 9h6a2 2 0 0 1 2 2v6m-2 2H9a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2m3.582 3.59a2 2 0 0 0 2.83 2.826M17 9V7a2 2 0 0 0-2-2H9M5 5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2M3 3l18 18\"/>";
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
