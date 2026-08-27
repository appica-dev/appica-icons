<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path stroke-miterlimit=\"10\" d=\"M21.5 9.6V6h-19v3.6m19 0c-3.935 0-7.125 3.224-7.125 7.2V18M21.5 9.6c0 3.583-2.269 6.764-5.633 7.897L14.375 18m0 0h-4.75m0 0v-1.2c0-3.976-3.19-7.2-7.125-7.2M9.625 18l-1.492-.503C4.769 16.364 2.5 13.183 2.5 9.6m8.313-1.2h2.374\"/>";
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
