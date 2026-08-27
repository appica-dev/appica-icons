<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m18 9 3 3m0 0-3 3m3-3h-6M6 9l-3 3m0 0 3 3m-3-3h6m0 6 3 3m0 0 3-3m-3 3v-6m3-9-3-3m0 0L9 6m3-3v6\"/>";
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
