<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9.882 14.647v-3.706a2.118 2.118 0 0 1 4.236 0v3.706M9.882 13.06h4.236m-8.47-7.412h3.705L12 3l2.647 2.647h3.706v3.706L21 12l-2.647 2.647v3.706h-3.706L12 21l-2.647-2.647H5.647v-3.706L3 12l2.647-2.647z\"/>";
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
