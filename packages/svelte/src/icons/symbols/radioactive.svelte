<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m13.5 14.748 3 5.256a9.06 9.06 0 0 0 3.293-3.334A9.2 9.2 0 0 0 21 12.115h-6c0 .534-.138 1.058-.401 1.52a3 3 0 0 1-1.099 1.113m0-5.266 3-5.257a8.9 8.9 0 0 0-4.5-1.22c-1.58 0-3.132.42-4.5 1.22l3 5.257a2.97 2.97 0 0 1 3 0m-3 5.266-3 5.256a9.06 9.06 0 0 1-3.293-3.334A9.2 9.2 0 0 1 3 12.115h6c0 .534.138 1.058.401 1.52a3 3 0 0 0 1.099 1.113\"/>";
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
