<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15.429 18.75c0 .597.24 1.169.669 1.591s1.01.659 1.616.659 1.188-.237 1.617-.659c.428-.422.669-.994.669-1.591s-.24-1.169-.67-1.591a2.3 2.3 0 0 0-1.616-.659c-.606 0-1.187.237-1.616.659s-.67.994-.67 1.591m0 0H6.286m9.143-4.5 1.142 2.25m-8-2.25L5.143 21M15.429 4.125V3M12 4.125V3M8.571 4.125V3M20 7.5H4c0 1.79.722 3.507 2.008 4.773a6.91 6.91 0 0 0 4.85 1.977h2.285a6.92 6.92 0 0 0 4.76-1.887A6.7 6.7 0 0 0 20 7.753z\"/>";
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
