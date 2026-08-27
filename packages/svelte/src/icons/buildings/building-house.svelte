<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 21.5V7.25m0 14.25h4.275M12 21.5H7.25c-1.791 0-2.687 0-3.243-.556S3.45 19.491 3.45 17.7V7.25M12 21.5h-1.9M12 7.25l5.7 2.85M12 7.25v-3.8m5.7 6.65l2.85 1.425M17.7 10.1V7.25m2.85 4.275V17.7c0 1.791 0 2.687-.556 3.244s-1.452.556-3.244.556h-.475m4.275-9.975l.95.475m-5.225 9.5v-3.8M12.95 2.5L2.5 7.25m4.75 3.8h.95m-.95 3.8h.95m7.6-.95h.95\"/>";
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
