<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M16.688 7.441c1.918.682 3.699 2.181 5.312 4.565-1.61 2.382-3.387 3.881-5.301 4.565A6.97 6.97 0 0 1 15 12a6.97 6.97 0 0 1 1.69-4.56M15 12H4.422M2 9.504q1.158 1.304 2.422 2.504A40 40 0 0 0 2 14.506M18 11v.01M7 10v4m4-6v8\"/>";
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
