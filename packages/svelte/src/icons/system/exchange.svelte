<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5 16a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0 0v-5a5 5 0 0 1 5-5h3m6 2a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 0v5a5 5 0 0 1-5 5h-3m0 0 3-3m-3 3 3 3M13 6l-3-3m3 3-3 3\"/>";
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
