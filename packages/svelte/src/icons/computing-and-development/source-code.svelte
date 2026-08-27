<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M14.656 3.5h2.656A3.19 3.19 0 0 1 20.5 6.688v10.625a3.187 3.187 0 0 1-3.187 3.187H6.688A3.187 3.187 0 0 1 3.5 17.313V12m2.125-7.437L3.5 6.688l2.125 2.125m4.25 0L12 6.687 9.875 4.563\"/>";
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
