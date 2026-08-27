<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7 21v-6m0 6 3-3m-3 3-3-3M20 6l-3-3m0 0-3 3m3-3v6M7 3v2m0 4v2m10 10v-2m0-4v-2\"/>";
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
